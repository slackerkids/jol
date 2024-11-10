import { auth } from "@/auth";
import PlaceList from "@/components/ui/dashboard/PlaceList";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Места для посещения</h1>
      <PlaceList />
    </div>
  );
}