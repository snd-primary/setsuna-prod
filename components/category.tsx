import Link from "next/link"
import Category from "../models/category"

import Tab from '@mui/material/Tab';
import * as React from 'react'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const CategoryTab = ({ category }: {
  category: Category
}) => {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div key={category.id}>
        <Link href={`/category/${category.id}`} passHref>
          <LinkTab label={category.name} />
        </Link>
      </div>
   </>
  )
}

export default CategoryTab

