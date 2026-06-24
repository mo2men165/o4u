"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import type { Job } from "@/lib/jobs";
import { cn } from "@/lib/utils";

const DEPARTMENTS = ["Customer Service", "Sales", "Operations", "Admin"];

type JobFormData = {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  shortDescription: string;
  active: boolean;
  order: number;
};

const emptyForm: JobFormData = {
  id: "",
  title: "",
  department: "Customer Service",
  type: "Full-time",
  description: "",
  shortDescription: "",
  active: true,
  order: 0,
};

function jobToForm(job: Job): JobFormData {
  return {
    id: job.id,
    title: job.title,
    department: job.department,
    type: job.type,
    description: job.description,
    shortDescription: job.shortDescription,
    active: job.active,
    order: job.order,
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<JobFormData>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    setError("");
    try {
      const res = await fetch("/api/admin/jobs");
      if (!res.ok) throw new Error("Failed to load jobs");
      const data = await res.json();
      setJobs(data);
    } catch {
      setError("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  const openCreate = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      order: jobs.length > 0 ? Math.max(...jobs.map((j) => j.order)) + 1 : 1,
    });
    setFormOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditingId(job.id);
    setForm(jobToForm(job));
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const isEdit = !!editingId;
      const url = isEdit ? `/api/admin/jobs/${editingId}` : "/api/admin/jobs";
      const method = isEdit ? "PUT" : "POST";

      const payload = isEdit
        ? {
            title: form.title,
            department: form.department,
            type: form.type,
            description: form.description,
            shortDescription: form.shortDescription,
            active: form.active,
            order: form.order,
          }
        : form;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save job");
      }

      closeForm();
      await fetchJobs();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save job.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    setDeletingId(id);
    setError("");

    try {
      const res = await fetch(`/api/admin/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete job");
      await fetchJobs();
    } catch {
      setError("Failed to delete job.");
    } finally {
      setDeletingId(null);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-primary-700/50 dark:bg-primary-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-ink dark:text-white">
            Job Postings
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage careers page listings
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-heading text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            <Plus className="h-4 w-4" />
            Add Job
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 font-heading text-sm font-semibold text-gray-600 transition hover:bg-gray-100 dark:border-primary-700/50 dark:text-gray-300 dark:hover:bg-primary-800"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {error && (
        <p className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading jobs…
        </p>
      ) : jobs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 p-12 text-center dark:border-primary-700/50">
          <p className="text-gray-500 dark:text-gray-400">No jobs yet.</p>
          <button
            type="button"
            onClick={openCreate}
            className="mt-4 font-heading text-sm font-semibold text-primary hover:underline"
          >
            Add your first job
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-primary-700/50 dark:bg-primary-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-primary-700/50 dark:bg-primary-800/50">
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Title
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Department
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Type
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Status
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Order
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold text-gray-600 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b border-gray-100 last:border-0 dark:border-primary-700/30"
                  >
                    <td className="px-6 py-4 font-medium text-ink dark:text-white">
                      {job.title}
                      <span className="mt-0.5 block text-xs text-gray-400">
                        {job.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {job.department}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {job.type}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          job.active
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        )}
                      >
                        {job.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {job.order}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => openEdit(job)}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-primary dark:hover:bg-primary-800"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(job.id)}
                          disabled={deletingId === job.id}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-primary-700/50 dark:bg-primary-900">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-ink dark:text-white">
                {editingId ? "Edit Job" : "Add Job"}
              </h2>
              <button
                type="button"
                onClick={closeForm}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 dark:hover:bg-primary-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!editingId && (
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                    Job ID (slug)
                  </label>
                  <input
                    type="text"
                    value={form.id}
                    onChange={(e) =>
                      setForm({ ...form, id: e.target.value.toLowerCase().replace(/\s+/g, "-") })
                    }
                    required
                    placeholder="e.g. cs-agent-en"
                    className={inputClass}
                  />
                </div>
              )}

              <div>
                <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                    Department
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className={inputClass}
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                    Type
                  </label>
                  <input
                    type="text"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    required
                    placeholder="Full-time"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                  Short Description
                </label>
                <input
                  type="text"
                  value={form.shortDescription}
                  onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={4}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
                    min={0}
                    className={inputClass}
                  />
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.active}
                      onChange={(e) => setForm({ ...form, active: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="font-heading text-sm font-medium text-gray-700 dark:text-gray-300">
                      Active (visible on careers page)
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-lg border border-gray-200 px-4 py-2.5 font-heading text-sm font-semibold text-gray-600 transition hover:bg-gray-100 dark:border-primary-700/50 dark:text-gray-300 dark:hover:bg-primary-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-primary px-4 py-2.5 font-heading text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
                >
                  {saving ? "Saving…" : editingId ? "Save Changes" : "Create Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
