import gql from "graphql-tag";

export const GET_CRICKET_MATCHES = gql`
  query Schedule($type: String!, $matchStatus: String!, $page: Int!) {
    newSchedule(type: $type, status: $matchStatus, page: $page) {
      seriesID
      matchType
      seriesName
      seriesView
      league
      seriesAvailable
      matches {
        matchdate
        teamsWinProbability {
          awayTeamPercentage
          homeTeamPercentage
          awayTeamShortName
          homeTeamShortName
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
