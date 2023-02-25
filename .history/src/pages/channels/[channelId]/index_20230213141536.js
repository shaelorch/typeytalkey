import { GetServerSideProps } from "next";

export default function Channel() {

    return (
      <div>
        <h1>A single channel</h1>
      </div>
    )
  }

  export async function getServerSideProps(context) {
    const messages = await getAllMessages(1);
    const channelId = context.
  }
  