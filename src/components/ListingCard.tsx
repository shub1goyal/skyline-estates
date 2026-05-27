import { Bath, BedDouble, Ruler, Scale } from "lucide-react";

type Listing = {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  image: string;
  tags: string[];
};

export function ListingCard({
  listing,
  selected,
  onToggle,
}: {
  listing: Listing;
  selected?: boolean;
  onToggle?: (id: string) => void;
}) {
  return (
    <article className="listing-card">
      <div className="card-media" style={{ "--image": `url(${listing.image})` } as React.CSSProperties} />
      <div className="card-body">
        <div className="card-topline">
          <span>{listing.type}</span>
          <span>{listing.id}</span>
        </div>
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
        <div className="tag-list">
          <span className="tag">
            <BedDouble size={13} /> {listing.beds} beds
          </span>
          <span className="tag">
            <Bath size={13} /> {listing.baths} baths
          </span>
          <span className="tag">
            <Ruler size={13} /> {listing.area.toLocaleString("en-IN")} sq ft
          </span>
        </div>
        <div className="card-topline" style={{ marginTop: 18 }}>
          <strong>INR {(listing.price / 10000000).toFixed(2)} Cr</strong>
          {onToggle ? (
            <button
              className="filter-chip"
              onClick={() => onToggle(listing.id)}
              type="button"
              style={{
                background: selected ? "var(--mint)" : "white",
                borderColor: selected ? "rgba(47, 139, 111, 0.68)" : undefined,
              }}
            >
              <Scale size={13} /> {selected ? "Selected" : "Compare"}
            </button>
          ) : (
            <span>Shortlist</span>
          )}
        </div>
      </div>
    </article>
  );
}
