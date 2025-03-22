import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://app.invoiced.com/invoices/new", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 1000,
      width: 1000,
      title: 'Create Invoice',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Create a website in Invoiced.com
        </Text>

        <Box>
          <Button type="submit" onClick={handleClick}>
            Click me
          </Button>
        </Box>
      </Flex>
    </>
  );
};
