import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_CRICKET_MATCHES } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://api.devcdc.com/cricket",
  cache: new InMemoryCache(),
});

class MatchService {
  async getCricketMatches(type, matchStatus, page) {
    try {
      const response = await apolloClient.query({
        query: GET_CRICKET_MATCHES,
        variables: { type, matchStatus, page },
      });
      if (!response || !response.data) throw new Error("Cannot get Match Data");
      return response.data.newSchedule;
    } catch (err) {
      throw err;
    }
  }
}

export default new MatchService();
