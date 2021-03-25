/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament {
    onCreateTournament {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament {
    onUpdateTournament {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament {
    onDeleteTournament {
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
export const onCreateTournamentPlayer = /* GraphQL */ `
  subscription OnCreateTournamentPlayer {
    onCreateTournamentPlayer {
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
export const onUpdateTournamentPlayer = /* GraphQL */ `
  subscription OnUpdateTournamentPlayer {
    onUpdateTournamentPlayer {
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
export const onDeleteTournamentPlayer = /* GraphQL */ `
  subscription OnDeleteTournamentPlayer {
    onDeleteTournamentPlayer {
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound {
    onUpdateRound {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound {
    onDeleteRound {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateGuess = /* GraphQL */ `
  subscription OnCreateGuess {
    onCreateGuess {
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
export const onUpdateGuess = /* GraphQL */ `
  subscription OnUpdateGuess {
    onUpdateGuess {
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
export const onDeleteGuess = /* GraphQL */ `
  subscription OnDeleteGuess {
    onDeleteGuess {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
