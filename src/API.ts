/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTournamentInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  year?: number | null,
  owner: string,
  password?: string | null,
};

export type ModelTournamentConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  year?: ModelIntInput | null,
  owner?: ModelIDInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelTournamentConditionInput | null > | null,
  or?: Array< ModelTournamentConditionInput | null > | null,
  not?: ModelTournamentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Tournament = {
  __typename: "Tournament",
  id?: string,
  name?: string,
  image?: string | null,
  year?: number | null,
  owner?: string,
  password?: string | null,
  rounds?: ModelRoundConnection,
  players?: ModelTournamentPlayerConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelRoundConnection = {
  __typename: "ModelRoundConnection",
  items?:  Array<Round | null > | null,
  nextToken?: string | null,
};

export type Round = {
  __typename: "Round",
  id?: string,
  tournament_id?: string,
  tournament?: Tournament,
  round?: number,
  matches?: ModelMatchConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items?:  Array<Match | null > | null,
  nextToken?: string | null,
};

export type Match = {
  __typename: "Match",
  id?: string,
  tournament_id?: string,
  tournament?: Tournament,
  round?: Round,
  round_id?: string,
  team_a_name?: string,
  team_b_name?: string,
  team_a_result?: number | null,
  team_b_result?: number | null,
  guesses?: ModelGuessConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelGuessConnection = {
  __typename: "ModelGuessConnection",
  items?:  Array<Guess | null > | null,
  nextToken?: string | null,
};

export type Guess = {
  __typename: "Guess",
  id?: string,
  match_id?: string,
  match?: Match,
  tournament_id?: string,
  tournament?: Tournament,
  team_a_guess?: number,
  team_b_guess?: number,
  owner_id?: string,
  owner_name?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTournamentPlayerConnection = {
  __typename: "ModelTournamentPlayerConnection",
  items?:  Array<TournamentPlayer | null > | null,
  nextToken?: string | null,
};

export type TournamentPlayer = {
  __typename: "TournamentPlayer",
  id?: string,
  player_id?: string,
  player?: User,
  points?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  image?: string | null,
  joinedTournaments?: Array< string > | null,
  ownedTournaments?: Array< string > | null,
  wins?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTournamentInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  year?: number | null,
  owner?: string | null,
  password?: string | null,
};

export type DeleteTournamentInput = {
  id?: string | null,
};

export type CreateTournamentPlayerInput = {
  id?: string | null,
  player_id: string,
  points: number,
};

export type ModelTournamentPlayerConditionInput = {
  player_id?: ModelIDInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelTournamentPlayerConditionInput | null > | null,
  or?: Array< ModelTournamentPlayerConditionInput | null > | null,
  not?: ModelTournamentPlayerConditionInput | null,
};

export type UpdateTournamentPlayerInput = {
  id: string,
  player_id?: string | null,
  points?: number | null,
};

export type DeleteTournamentPlayerInput = {
  id?: string | null,
};

export type CreateRoundInput = {
  id?: string | null,
  tournament_id: string,
  round: number,
};

export type ModelRoundConditionInput = {
  tournament_id?: ModelIDInput | null,
  round?: ModelIntInput | null,
  and?: Array< ModelRoundConditionInput | null > | null,
  or?: Array< ModelRoundConditionInput | null > | null,
  not?: ModelRoundConditionInput | null,
};

export type UpdateRoundInput = {
  id: string,
  tournament_id?: string | null,
  round?: number | null,
};

export type DeleteRoundInput = {
  id?: string | null,
};

export type CreateMatchInput = {
  id?: string | null,
  tournament_id: string,
  round_id: string,
  team_a_name: string,
  team_b_name: string,
  team_a_result?: number | null,
  team_b_result?: number | null,
};

export type ModelMatchConditionInput = {
  tournament_id?: ModelIDInput | null,
  round_id?: ModelIDInput | null,
  team_a_name?: ModelStringInput | null,
  team_b_name?: ModelStringInput | null,
  team_a_result?: ModelIntInput | null,
  team_b_result?: ModelIntInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type UpdateMatchInput = {
  id: string,
  tournament_id?: string | null,
  round_id?: string | null,
  team_a_name?: string | null,
  team_b_name?: string | null,
  team_a_result?: number | null,
  team_b_result?: number | null,
};

export type DeleteMatchInput = {
  id?: string | null,
};

export type CreateGuessInput = {
  id?: string | null,
  match_id: string,
  tournament_id: string,
  team_a_guess: number,
  team_b_guess: number,
  owner_id: string,
  owner_name: string,
};

export type ModelGuessConditionInput = {
  match_id?: ModelIDInput | null,
  tournament_id?: ModelIDInput | null,
  team_a_guess?: ModelIntInput | null,
  team_b_guess?: ModelIntInput | null,
  owner_id?: ModelIDInput | null,
  owner_name?: ModelStringInput | null,
  and?: Array< ModelGuessConditionInput | null > | null,
  or?: Array< ModelGuessConditionInput | null > | null,
  not?: ModelGuessConditionInput | null,
};

export type UpdateGuessInput = {
  id: string,
  match_id?: string | null,
  tournament_id?: string | null,
  team_a_guess?: number | null,
  team_b_guess?: number | null,
  owner_id?: string | null,
  owner_name?: string | null,
};

export type DeleteGuessInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  joinedTournaments?: Array< string > | null,
  ownedTournaments?: Array< string > | null,
  wins: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  joinedTournaments?: ModelIDInput | null,
  ownedTournaments?: ModelIDInput | null,
  wins?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  joinedTournaments?: Array< string > | null,
  ownedTournaments?: Array< string > | null,
  wins?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelTournamentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  year?: ModelIntInput | null,
  owner?: ModelIDInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelTournamentFilterInput | null > | null,
  or?: Array< ModelTournamentFilterInput | null > | null,
  not?: ModelTournamentFilterInput | null,
};

export type ModelTournamentConnection = {
  __typename: "ModelTournamentConnection",
  items?:  Array<Tournament | null > | null,
  nextToken?: string | null,
};

export type ModelTournamentPlayerFilterInput = {
  id?: ModelIDInput | null,
  player_id?: ModelIDInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelTournamentPlayerFilterInput | null > | null,
  or?: Array< ModelTournamentPlayerFilterInput | null > | null,
  not?: ModelTournamentPlayerFilterInput | null,
};

export type ModelRoundFilterInput = {
  id?: ModelIDInput | null,
  tournament_id?: ModelIDInput | null,
  round?: ModelIntInput | null,
  and?: Array< ModelRoundFilterInput | null > | null,
  or?: Array< ModelRoundFilterInput | null > | null,
  not?: ModelRoundFilterInput | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  tournament_id?: ModelIDInput | null,
  round_id?: ModelIDInput | null,
  team_a_name?: ModelStringInput | null,
  team_b_name?: ModelStringInput | null,
  team_a_result?: ModelIntInput | null,
  team_b_result?: ModelIntInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelGuessFilterInput = {
  id?: ModelIDInput | null,
  match_id?: ModelIDInput | null,
  tournament_id?: ModelIDInput | null,
  team_a_guess?: ModelIntInput | null,
  team_b_guess?: ModelIntInput | null,
  owner_id?: ModelIDInput | null,
  owner_name?: ModelStringInput | null,
  and?: Array< ModelGuessFilterInput | null > | null,
  or?: Array< ModelGuessFilterInput | null > | null,
  not?: ModelGuessFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  joinedTournaments?: ModelIDInput | null,
  ownedTournaments?: ModelIDInput | null,
  wins?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateTournamentMutationVariables = {
  input?: CreateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type CreateTournamentMutation = {
  createTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTournamentMutationVariables = {
  input?: UpdateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type UpdateTournamentMutation = {
  updateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTournamentMutationVariables = {
  input?: DeleteTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type DeleteTournamentMutation = {
  deleteTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTournamentPlayerMutationVariables = {
  input?: CreateTournamentPlayerInput,
  condition?: ModelTournamentPlayerConditionInput | null,
};

export type CreateTournamentPlayerMutation = {
  createTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTournamentPlayerMutationVariables = {
  input?: UpdateTournamentPlayerInput,
  condition?: ModelTournamentPlayerConditionInput | null,
};

export type UpdateTournamentPlayerMutation = {
  updateTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTournamentPlayerMutationVariables = {
  input?: DeleteTournamentPlayerInput,
  condition?: ModelTournamentPlayerConditionInput | null,
};

export type DeleteTournamentPlayerMutation = {
  deleteTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoundMutationVariables = {
  input?: CreateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type CreateRoundMutation = {
  createRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoundMutationVariables = {
  input?: UpdateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type UpdateRoundMutation = {
  updateRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoundMutationVariables = {
  input?: DeleteRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type DeleteRoundMutation = {
  deleteRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMatchMutationVariables = {
  input?: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input?: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input?: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGuessMutationVariables = {
  input?: CreateGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type CreateGuessMutation = {
  createGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuessMutationVariables = {
  input?: UpdateGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type UpdateGuessMutation = {
  updateGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuessMutationVariables = {
  input?: DeleteGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type DeleteGuessMutation = {
  deleteGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTournamentQueryVariables = {
  id?: string,
};

export type GetTournamentQuery = {
  getTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentConnection",
    items?:  Array< {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTournamentPlayerQueryVariables = {
  id?: string,
};

export type GetTournamentPlayerQuery = {
  getTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTournamentPlayersQueryVariables = {
  filter?: ModelTournamentPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentPlayersQuery = {
  listTournamentPlayers?:  {
    __typename: "ModelTournamentPlayerConnection",
    items?:  Array< {
      __typename: "TournamentPlayer",
      id: string,
      player_id: string,
      player:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        joinedTournaments?: Array< string > | null,
        ownedTournaments?: Array< string > | null,
        wins: number,
        createdAt: string,
        updatedAt: string,
      },
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoundQueryVariables = {
  id?: string,
};

export type GetRoundQuery = {
  getRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoundsQueryVariables = {
  filter?: ModelRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoundsQuery = {
  listRounds?:  {
    __typename: "ModelRoundConnection",
    items?:  Array< {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id?: string,
};

export type GetMatchQuery = {
  getMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchsQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchsQuery = {
  listMatchs?:  {
    __typename: "ModelMatchConnection",
    items?:  Array< {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGuessQueryVariables = {
  id?: string,
};

export type GetGuessQuery = {
  getGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGuesssQueryVariables = {
  filter?: ModelGuessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuesssQuery = {
  listGuesss?:  {
    __typename: "ModelGuessConnection",
    items?:  Array< {
      __typename: "Guess",
      id: string,
      match_id: string,
      match:  {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      team_a_guess: number,
      team_b_guess: number,
      owner_id: string,
      owner_name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTournamentSubscription = {
  onCreateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTournamentSubscription = {
  onUpdateTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTournamentSubscription = {
  onDeleteTournament?:  {
    __typename: "Tournament",
    id: string,
    name: string,
    image?: string | null,
    year?: number | null,
    owner: string,
    password?: string | null,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items?:  Array< {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    players?:  {
      __typename: "ModelTournamentPlayerConnection",
      items?:  Array< {
        __typename: "TournamentPlayer",
        id: string,
        player_id: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTournamentPlayerSubscription = {
  onCreateTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTournamentPlayerSubscription = {
  onUpdateTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTournamentPlayerSubscription = {
  onDeleteTournamentPlayer?:  {
    __typename: "TournamentPlayer",
    id: string,
    player_id: string,
    player:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      joinedTournaments?: Array< string > | null,
      ownedTournaments?: Array< string > | null,
      wins: number,
      createdAt: string,
      updatedAt: string,
    },
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoundSubscription = {
  onCreateRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoundSubscription = {
  onUpdateRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoundSubscription = {
  onDeleteRound?:  {
    __typename: "Round",
    id: string,
    tournament_id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    round: number,
    matches?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        tournament_id: string,
        round_id: string,
        team_a_name: string,
        team_b_name: string,
        team_a_result?: number | null,
        team_b_result?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round:  {
      __typename: "Round",
      id: string,
      tournament_id: string,
      tournament?:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      round: number,
      matches?:  {
        __typename: "ModelMatchConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    round_id: string,
    team_a_name: string,
    team_b_name: string,
    team_a_result?: number | null,
    team_b_result?: number | null,
    guesses?:  {
      __typename: "ModelGuessConnection",
      items?:  Array< {
        __typename: "Guess",
        id: string,
        match_id: string,
        tournament_id: string,
        team_a_guess: number,
        team_b_guess: number,
        owner_id: string,
        owner_name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuessSubscription = {
  onCreateGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuessSubscription = {
  onUpdateGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuessSubscription = {
  onDeleteGuess?:  {
    __typename: "Guess",
    id: string,
    match_id: string,
    match:  {
      __typename: "Match",
      id: string,
      tournament_id: string,
      tournament:  {
        __typename: "Tournament",
        id: string,
        name: string,
        image?: string | null,
        year?: number | null,
        owner: string,
        password?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      round:  {
        __typename: "Round",
        id: string,
        tournament_id: string,
        round: number,
        createdAt: string,
        updatedAt: string,
      },
      round_id: string,
      team_a_name: string,
      team_b_name: string,
      team_a_result?: number | null,
      team_b_result?: number | null,
      guesses?:  {
        __typename: "ModelGuessConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tournament_id: string,
    tournament:  {
      __typename: "Tournament",
      id: string,
      name: string,
      image?: string | null,
      year?: number | null,
      owner: string,
      password?: string | null,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      players?:  {
        __typename: "ModelTournamentPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team_a_guess: number,
    team_b_guess: number,
    owner_id: string,
    owner_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    joinedTournaments?: Array< string > | null,
    ownedTournaments?: Array< string > | null,
    wins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
