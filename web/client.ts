import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "toyjqvbe", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2021-06-03",
  useCdn: true, // `false` if you want to ensure fresh data
});
