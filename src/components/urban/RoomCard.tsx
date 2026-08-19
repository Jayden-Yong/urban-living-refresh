import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BOOKING_URL, type Room } from "@/data/urban-living";
import { MaterialIcon } from "./MaterialIcon";

function FeatureList({ items }: { items: { icon: string; label: string }[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.label} className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
          <MaterialIcon name={f.icon} className="text-[18px] text-brass" />
          <span className="min-w-0 truncate">{f.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="flex flex-col overflow-hidden border border-border bg-card">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl text-foreground">{room.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground">
            <MaterialIcon name="square_foot" className="text-[16px] text-brass" />
            {room.size}
          </span>
          <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground">
            <MaterialIcon name="group" className="text-[16px] text-brass" />
            {room.guests}
          </span>
        </div>

        <Tabs defaultValue="appliances" className="mt-5 flex-1">
          <TabsList className="w-full justify-start gap-1 rounded-none bg-secondary p-1">
            <TabsTrigger value="appliances" className="rounded-none text-xs">
              Appliances
            </TabsTrigger>
            <TabsTrigger value="amenities" className="rounded-none text-xs">
              Amenities
            </TabsTrigger>
            <TabsTrigger value="request" className="rounded-none text-xs">
              On request
            </TabsTrigger>
          </TabsList>
          <TabsContent value="appliances" className="pt-4">
            <FeatureList items={room.appliances} />
          </TabsContent>
          <TabsContent value="amenities" className="pt-4">
            <FeatureList items={room.amenities} />
          </TabsContent>
          <TabsContent value="request" className="pt-4">
            <FeatureList items={room.onRequest} />
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-espresso px-5 py-2.5 eyebrow text-espresso-foreground transition-colors hover:bg-brass hover:text-primary-foreground"
          >
            <MaterialIcon name="event" className="text-[16px]" />
            Book room
          </a>
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MaterialIcon name="photo_prints" className="text-[16px] text-brass" />
            View gallery
          </span>
        </div>
      </div>
    </article>
  );
}