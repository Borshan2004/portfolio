import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { PROFILE } from "@/constants/data";
import { sendContactMessage } from "@/services/api";
import Button from "./Button";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await sendContactMessage(data);
      toast.success("Message sent — I'll reply soon!");
      reset();
    } catch {
      toast.error("Something went wrong. Try again shortly.");
    }
  };

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            05 — Contact
          </p>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Let's grab coffee.</h2>
          <p className="mt-4 max-w-sm text-white/70">
            Have a project to build, a system to untangle, or just want to talk shop? Drop a line
            — I read every message.
          </p>

          <p className="mt-8 text-lg font-bold">{PROFILE.email}</p>

          <div className="mt-6 flex gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-white/20 px-4 py-2 text-sm font-semibold hover:border-slate-300 hover:text-slate-300"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-white/20 px-4 py-2 text-sm font-semibold hover:border-slate-300 hover:text-slate-300"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Jane Doe"
              className="w-full rounded border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="jane@company.com"
              className="w-full rounded border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Subject
            </label>
            <input
              {...register("subject")}
              placeholder="Project inquiry"
              className="w-full rounded border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell me about your project or just say hi..."
              className="w-full rounded border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white hover:bg-slate-300 hover:text-navy">
            {isSubmitting ? "Sending…" : "Send message →"}
          </Button>
        </form>
      </div>
    </section>
  );
}
