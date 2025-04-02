/**
 * This file defines the tools available to the ReAct agent.
 * Tools are functions that the agent can use to interact with external systems or perform specific tasks.
 */
import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";

/**
 * DuckDuckGo search tool configuration
 * This tool allows the agent to perform web searches using the DuckDuckGo API.
 */
const searchDuckDuckGo = new DuckDuckGoSearch({
  maxResults: 3,
});

/**
 * Export an array of all available tools
 * Add new tools to this array to make them available to the agent
 *
 * Note: You can create custom tools by implementing the Tool interface from @langchain/core/tools
 * and add them to this array.
 * See https://js.langchain.com/docs/how_to/custom_tools/#tool-function for more information.
 */
export const TOOLS = [searchDuckDuckGo];
