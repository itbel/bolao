/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      name
      image
      year
      owner
      password
      rounds {
        items {
          id
          tournament_id
          round
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          player_id
          points
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        year
        owner
        password
        rounds {
          nextToken
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTournamentPlayer = /* GraphQL */ `
  query GetTournamentPlayer($id: ID!) {
    getTournamentPlayer(id: $id) {
      id
      player_id
      player {
        id
        name
        image
        joinedTournaments
        ownedTournaments
        wins
        createdAt
        updatedAt
      }
      points
      createdAt
      updatedAt
    }
  }
`;
export const listTournamentPlayers = /* GraphQL */ `
  query ListTournamentPlayers(
    $filter: ModelTournamentPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        player_id
        player {
          id
          name
          image
          joinedTournaments
          ownedTournaments
          wins
          createdAt
          updatedAt
        }
        points
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
      id
      tournament_id
      tournament {
        id
        name
        image
        year
        owner
        password
        rounds {
          nextToken
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      round
      matches {
        items {
          id
          tournament_id
          round_id
          team_a_name
          team_b_name
          team_a_result
          team_b_result
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tournament_id
        tournament {
          id
          name
          image
          year
          owner
          password
          createdAt
          updatedAt
        }
        round
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      tournament_id
      tournament {
        id
        name
        image
        year
        owner
        password
        rounds {
          nextToken
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      round {
        id
        tournament_id
        tournament {
          id
          name
          image
          year
          owner
          password
          createdAt
          updatedAt
        }
        round
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      round_id
      team_a_name
      team_b_name
      team_a_result
      team_b_result
      guesses {
        items {
          id
          match_id
          tournament_id
          team_a_guess
          team_b_guess
          owner_id
          owner_name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tournament_id
        tournament {
          id
          name
          image
          year
          owner
          password
          createdAt
          updatedAt
        }
        round {
          id
          tournament_id
          round
          createdAt
          updatedAt
        }
        round_id
        team_a_name
        team_b_name
        team_a_result
        team_b_result
        guesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGuess = /* GraphQL */ `
  query GetGuess($id: ID!) {
    getGuess(id: $id) {
      id
      match_id
      match {
        id
        tournament_id
        tournament {
          id
          name
          image
          year
          owner
          password
          createdAt
          updatedAt
        }
        round {
          id
          tournament_id
          round
          createdAt
          updatedAt
        }
        round_id
        team_a_name
        team_b_name
        team_a_result
        team_b_result
        guesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      tournament_id
      tournament {
        id
        name
        image
        year
        owner
        password
        rounds {
          nextToken
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      team_a_guess
      team_b_guess
      owner_id
      owner_name
      createdAt
      updatedAt
    }
  }
`;
export const listGuesss = /* GraphQL */ `
  query ListGuesss(
    $filter: ModelGuessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        match_id
        match {
          id
          tournament_id
          round_id
          team_a_name
          team_b_name
          team_a_result
          team_b_result
          createdAt
          updatedAt
        }
        tournament_id
        tournament {
          id
          name
          image
          year
          owner
          password
          createdAt
          updatedAt
        }
        team_a_guess
        team_b_guess
        owner_id
        owner_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      joinedTournaments
      ownedTournaments
      wins
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        joinedTournaments
        ownedTournaments
        wins
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
