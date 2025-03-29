"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { ListText } from "@/components/generic/listText/ListText";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsHomeRecord, projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";


export function DiscordBot() {
  console.log('DiscordBot');

  const {
    palette: {
      primary: {
        main,
      },
    }
  } = useTheme();

  const botsAge = new Date().getFullYear() - 2022;

  return (
    <Stack
      gap={2}
    >
      <Typography variant="h5">
        {projectsHomeRecord.projectDiscordBot.label}
      </Typography>

      <Typography>
        In 2020 I started to play a game with a large online community, an uncommon feature this game has
        is a REST API which is publically available, within it is data that is publically known to the
        different teams within the game for their conflict.
      </Typography>

      <Typography>
        In 2022 this API got an update that gave me an idea of something I could create, an automated alert
        system that would read the API and alert when new powerful weapons were built by the opposition; due
        to their power the developers decided to make them publically visible on the map after years of them
        being unknown in number and location.
      </Typography>

      <Typography>
        This resulted in me creating my Discord Bot, I was already well versed in <Span>Node.js</Span> but had never witten
        something persistent like this or of this interconnected scope; I had written APIs that would grab data,
        parse data, make decisions, return data; but not something of this complexity, I relished a project to
        challange myself in this way.
      </Typography>

      <Typography>
        For instance, the Bot has regular jobs to obtain and save data, following this it also performs a bunch of
        analysis on the data to possibly send messages to various Discord Servers about new events. This means I had
        to create an in-Discord way to not only configure these alerts, but set permissions for being able to perform
        said configuration in the first place; this mean't a database for permissions, commands to update that data
        validation against Discord roles and the database, handling of edge cases, and beyond during the {botsAge} years
        the bot has been running.
      </Typography>

      <Typography>
        As the API is focused on the position of in-game objects within a game world, I have used <Span>Konva and Canvas</Span>
        to take the assets available from the game's Developers and render on request a reflection of the in-game world's current situation.
      </Typography>

      <Typography>
        The Bot is now used by hundreds of users, and I have since added various additional functionalities at the
        request of the other players; several groups within one of the teams have worked with me to create multiple
        bespoke features that are now used by multiple groups to increase their collaboration.
      </Typography>

      <Typography>
        I have refrained from specfic details here as doing so can directly link my identitiy to my online name, however
        I am more than happy to discuss the Discord Bot and its features with individuals that get in contact with me
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'Writing the bot has forced me to push how I modularize my code, making it not only easier to read, but easier to change if needed.',

          'Working with different kinds of users, taking in both their requests and their complains, being as diplomatic as possible'
          + ' as these individuals are not professionals and can be quite "colorful with their language" on the internet.',

          'As discord.js only provides the tools to use a Discord bot, I have developed my own approach to managing the codebase'
          + ' and the execution of the apporiate functionality, for instance every possible interaction is its own file;'
          + ' unlike many discord bots I have seen people discuss on the support server, my bot\'s Autocomplete or Button'
          + ' interactions are not tied to the command that provides them; so that they maybe reused elsewhere.'
        ]}
      />

    </Stack>
  )
}