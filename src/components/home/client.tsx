import { getClients } from "@/actions/clients";
import { SectionHeader } from "../shared/section-header";
import { ClientMarquee } from "@/components/section/client-marquee"; // Import komponen baru tadi

export default async function ClientSection() {
  const { success, data, error } = await getClients();

  if (!success) {
    return <div className="text-red-500 py-10 text-center">error {error}</div>;
  }

  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      {" "}
      {/* overflow-hidden penting */}
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Klien Kami"
          subtitle="Sudah banyak perusahaan mempercayai kami"
        />

        {/* Panggil Client Component untuk Marquee */}
        {/* Kita passing data dari server ke client component */}
        <ClientMarquee clients={data} />
      </div>
    </section>
  );
}
