import { Html, Body, Text } from "@react-email/components";

const Email = ({ msg }) => {
  return (
    <Html lang="en">
      <Body className="p-2">
        <Text className="text-lg my-2">Thank you for contacting me!</Text>
        <Text>{msg}</Text>
      </Body>
    </Html>
  );
};
export default Email;
