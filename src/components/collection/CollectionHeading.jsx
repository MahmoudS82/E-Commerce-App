import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CollectionHeading({ title, count, description }) {
  return (
    <header className="collection-heading">
      <div>
        <p className="collection-eyebrow">YOUR COLLECTION</p>
        <h1>{title} <span className="collection-count">{count}</span></h1>
        <p className="collection-description">{description}</p>
      </div>
      <Link className="collection-shop-link" to="/AllProducts">Continue shopping <ArrowRight size={17} /></Link>
    </header>
  );
}
