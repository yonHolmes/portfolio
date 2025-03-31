import { searchableData } from "@/consts/searchableData";
import { stringSimilarity } from 'string-similarity-js';
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

      if (label.toLowerCase().includes(inputValue.toLowerCase())) {
        // Label/Title contains input
        return true;
      }
      if (searchTerms?.some(term => term.toLowerCase().includes(inputValue.toLowerCase()))) {
        // Any of the Search Terms, contain the input
        return true;
      }

      const score = stringSimilarity(inputValue.toLowerCase(), label.toLowerCase());
      if (score > 0.6) {
        // Any of the labels, are close to what was typed
        return true;
      }

      if (
        searchTerms?.some(term => 0.7 < stringSimilarity(term.toLowerCase(), inputValue.toLowerCase()))
      ) {
        // Any of the Search terms are close to what was typed
        return true;
      }

      // I like being explicit
      return false;
    })
}

type PropsAppSearchBox = {
  sx?: ComponentProps<typeof Autocomplete>["sx"],
  onNavigate?: () => void,
  iconPosition?: 'start' | 'end',
  disableUnderline?: boolean,
}

export function AppSearchBox({ sx, onNavigate, iconPosition, disableUnderline }: PropsAppSearchBox) {

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
      slotProps={{
        listbox: {
          style: {
            overflowY: 'scroll',
          }
        }
      }}
      sx={{
        maxWidth: '400px', // This fits the longest search item
        flexShrink: 1, // Don't allow to be reduced in width
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
              disableUnderline,
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
        onNavigate?.();
      }}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Box>
              <Typography color="primary">
                {option.label}
              </Typography>
              {option.keyTags &&
              <Typography
                variant="caption"
                fontStyle="italic"
              >
                {option.keyTags?.join(' • ')}
              </Typography>}
            </Box>
          </li>
        )
      }}
    />
  )
}