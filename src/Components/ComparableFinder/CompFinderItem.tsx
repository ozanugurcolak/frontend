import React from "react";
import { Link } from "react-router-dom";

type Props = {
  ticker: string;
};

const CompFinderItem = ({ ticker }: Props) => {
  return (
    <Link
      reloadDocument
      to={`/company/${ticker}/company-profile`}
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100"
    >
      {ticker}
    </Link>
  );
};

export default CompFinderItem;