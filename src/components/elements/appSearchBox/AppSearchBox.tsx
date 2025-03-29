import { searchableData } from "@/consts/searchableData";
import { ArrayElement } from "@/helpers/typescriptHelper";
import {
  Autocomplete,
  Box,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const searchableOptions = searchableData.map(({ tags, label, href }) => {
  return ({
    href,
    label,
    tags,
  });
});

type SearchableOptions = typeof searchableData;

function filterOptions(options: SearchableOptions, { inputValue }: { inputValue: string }) {
  return options
    .filter(({ label, tags }) => {
      if (tags.some(tag => tag.toLowerCase().includes(inputValue.toLowerCase()))) {
        return true;
      }
      if (label.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      // I like being explicit
      return false;
    })
}

export function AppSearchBox() {

  const [acKey, setACKey] = useState(0);

  const router = useRouter();
  function handleNav(path: string) {
    router.push(path);
    setACKey(acKey + 1);
  }

  return (
    <Autocomplete
      key={
        // This "hack" clears the AC when we navigate
        `AC-${acKey + 1}`
      }
      options={searchableOptions}
      fullWidth
      sx={{
        maxWidth: '400px', // This fits the longest search item
        flexShrink: 0, // Don't allow to be reduced in width
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search (e.g. 'Node.js')"
          variant="standard"
        />
      )}
      filterOptions={(options, state) => filterOptions(options, state)}
      onChange={(_ev, value) => {
        if (!value) {
          return;
        }
        handleNav(value.href);
      }}
    />
  )
}