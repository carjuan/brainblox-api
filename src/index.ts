interface Hello {
  text: string;
}

function say({ text }: Hello): string {
  return `I am saying ${text}`;
}

console.log(
  say({
    text: 'helloooooo',
  }),
);
