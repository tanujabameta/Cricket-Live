import gql from "graphql-tag";

export const GET_CRICKET_MATCHES = gql`
  query Schedule($type: String!, $matchStatus: String!, $page: Int!) {
    newSchedule(type: $type, status: $matchStatus, page: $page) {
      seriesID
      seriesName
      seriesView
      league
      seriesAvailable
      matches {
        matchStatus
        matchResult
        venue
        matchType
        matchdate
        homeTeamName
        awayTeamName
        teamsWinProbability {
          awayTeamPercentage
          homeTeamPercentage
        }
        matchScore {
          teamScore {
            runsScored
            battingSide
            wickets
            overs
          }
        }
      }
    }
  }
`;
