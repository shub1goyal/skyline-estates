"use client";

import { useMemo, useState } from "react";
import { Filter, Scale, Search } from "lucide-react";
import { listings } from "@/data/realEstate";
import { ListingCard } from "./ListingCard";

export function PropertyExplorer() {
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState(70000000);
  const [query, setQuery] = useState("");
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return listings.filter((listing) => {
      const matchesType = type === "All" || listing.type === type;
      const matchesBudget = listing.price <= budget;
      const matchesQuery =
        !query ||
        `${listing.title} ${listing.location} ${listing.tags.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesType && matchesBudget && matchesQuery;
    });
  }, [type, budget, query]);

  function toggle(id: string) {
    setCompare((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length >= 3
          ? [...current.slice(1), id]
          : [...current, id],
    );
  }

  return (
    <div className="explorer">
      <aside className="filter-panel">
        <div className="card-topline">
          <span>
            <Filter size={14} /> Buyer filters
          </span>
          <span>{filtered.length} matches</span>
        </div>
        <div className="field">
          <label>Search</label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Garden, metro, office..."
          />
        </div>
        <div className="field">
          <label>Property type</label>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {["All", "Villa", "Duplex", "Apartment", "Builder Floor", "Independent House", "Penthouse", "Townhouse"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </div>
        <div className="field">
          <label>Max budget: INR {(budget / 10000000).toFixed(1)} Cr</label>
          <input
            min={7000000}
            max={70000000}
            step={1000000}
            type="range"
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
          />
        </div>
        <div className="field">
          <button className="btn btn-primary" type="button">
            <Search size={16} />
            Save search
          </button>
        </div>
      </aside>

      <div>
        <div className="cards-grid">
          {filtered.map((listing) => (
            <ListingCard
              listing={listing}
              key={listing.id}
              selected={compare.includes(listing.id)}
              onToggle={toggle}
            />
          ))}
        </div>
        <div className="compare-dock">
          <div>
            <strong>
              <Scale size={16} /> Compare shortlist
            </strong>
            <p style={{ color: "var(--muted)", marginTop: 4 }}>
              {compare.length
                ? compare.join(", ")
                : "Choose up to 3 properties to compare like a real buyer portal."}
            </p>
          </div>
          <button className="btn btn-copper" type="button">
            Generate buyer brief
          </button>
        </div>
      </div>
    </div>
  );
}
