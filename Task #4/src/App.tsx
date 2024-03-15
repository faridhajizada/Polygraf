const text: string =
  "According to all known laws of aviation, there's no way a bee should be able to fly. The bee, however, flies anyway, because bees don't care whot humans think is posible";

type EmboldenProps = { ranges: Array<[number, number]>; children: string };

function Embolden({ ranges, children }: EmboldenProps) {
  let boldText = "";
  let lastIndex = 0;

  // Iterate through each range
  for (const [start, end] of ranges) {
    boldText += children.substring(lastIndex, start);
    boldText += `<b>${children.substring(start, end)}</b>`;
    lastIndex = end;
  }

  // Added the remaining text after thrae last range
  boldText += children.substring(lastIndex);

  return <p dangerouslySetInnerHTML={{ __html: boldText }} />;
}

function App() {
  return (
    <>
      <p>{text}</p>
      <Embolden ranges={[[3, 6],[8, 12],]}>
        {text}
      </Embolden>
    </>
  );
}

export default App;
