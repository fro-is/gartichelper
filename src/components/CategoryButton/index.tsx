import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./styles";

interface CategoryButtonProps {
  icon: string;
  category: string;
  className: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  category,
  className,
}: CategoryButtonProps) => {
  return (
    <Link href={`/categories/${category.toLowerCase()}`}>
      <Button className={className}>
        <Image src={icon} alt={category} width="32px" height="32px" />
        <p>{category}</p>
      </Button>
    </Link>
  );
};

export default CategoryButton;
