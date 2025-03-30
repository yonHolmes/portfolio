import { searchableData } from "@/consts/searchableData";
import { ArrayElement } from "@/helpers/typescriptHelper";
import {
  Autocomplete,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";

const searchableOptions = searchableData.map(({ searchTerms, keyTags, label, href }) => {
  return ({
    href,
    label,
    searchTerms,
    keyTags,
  });
});

type SearchableOptions = typeof searchableData;

function filterOptions(options: SearchableOptions, { inputValue }: { inputValue: string }) {
  return options
    .filter(({ label, searchTerms }) => {
      if (searchTerms?.some(term => term.toLowerCase().includes(inputValue.toLowerCase()))) {
        return true;
      }
      if (label.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      // I like being explicit
      return false;
    })
}

type PropsAppSearchBox = {
  sx?: ComponentProps<typeof Autocomplete>["sx"],
  iconPosition?: 'start' | 'end',
}

export function AppSearchBox({ sx, iconPosition }: PropsAppSearchBox) {

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
        ...(sx ?? {}),
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search (e.g. 'Node.js')"
          variant="standard"
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment: iconPosition === 'start'
                ? <SearchIcon/>
                : null,
              endAdornment: iconPosition !== 'start'
                ? <SearchIcon/>
                : null,
              disableUnderline: true, // <== added this
            },
          }}
        />
      )}
      filterOptions={(options, state) => filterOptions(options, state)}
      onChange={(_ev, value) => {
        if (!value) {
          return;
        }
        handleNav(value.href);
      }}

      
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Box>
              <Typography>
                {option.label}
              </Typography>
              {option.keyTags &&
              <Typography variant="caption" style={{ fontStyle: 'italic' }}>
                {option.keyTags?.join(' | ')}
              </Typography>}
            </Box>
          </li>
        )
      }}
    />
  )
}