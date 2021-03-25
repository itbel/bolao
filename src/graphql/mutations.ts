/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
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
export const createTournamentPlayer = /* GraphQL */ `
  mutation CreateTournamentPlayer(
    $input: CreateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    createTournamentPlayer(input: $input, condition: $condition) {
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
export const updateTournamentPlayer = /* GraphQL */ `
  mutation UpdateTournamentPlayer(
    $input: UpdateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    updateTournamentPlayer(input: $input, condition: $condition) {
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
export const deleteTournamentPlayer = /* GraphQL */ `
  mutation DeleteTournamentPlayer(
    $input: DeleteTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    deleteTournamentPlayer(input: $input, condition: $condition) {
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
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
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
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
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
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createGuess = /* GraphQL */ `
  mutation CreateGuess(
    $input: CreateGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    createGuess(input: $input, condition: $condition) {
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
export const updateGuess = /* GraphQL */ `
  mutation UpdateGuess(
    $input: UpdateGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    updateGuess(input: $input, condition: $condition) {
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
export const deleteGuess = /* GraphQL */ `
  mutation DeleteGuess(
    $input: DeleteGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    deleteGuess(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
