import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./styles";

interface CategoryButtonProps {
  icon: string;
  category: string;
  className: string;
  position: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  category,
  className,
  position,
}: CategoryButtonProps) => {
  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
      className={className}
    >
      <meta itemProp="position" content={position} />
      <Link href={`/categories/${category.toLowerCase()}`}>
        <Button itemProp="item">
          <Image
            src={icon}
            alt={category}
            width="32px"
            height="32px"
            itemProp="image"
          />
          <span itemProp="name">{category}</span>
        </Button>
      </Link>
    </li>
  );
};

export default CategoryButton;
