import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      table: (props) => {
        console.log("props", props.node.rows)
        return (
          <div class="table">
        {props.node.rows.map((row) => (
          <div class="row">{row.cells.map(col => (<div class="cell"><p>{col}</p></div>))}</div>
        ))}
        </div>)}
    },
  },
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
