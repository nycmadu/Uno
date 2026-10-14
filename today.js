const tips = [
  "Use Get-Help <cmdlet> -Examples to see usage examples for any command.",
  "Press Ctrl+R to search your command history interactively.",
  "Pipe to Out-GridView to browse results in a sortable, filterable window.",
  "Use Get-Command *keyword* to find cmdlets when you only know part of the name.",
  "Run Get-History to list commands from this session, then Invoke-History <id> to rerun one.",
  "Use Select-Object -First 5 to show only the first few results of a pipeline.",
  "Add -WhatIf to destructive cmdlets like Remove-Item to preview what they would do.",
];

const today = new Date();
const tip = tips[Math.floor(Math.random() * tips.length)];

console.log(`Today is ${today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`);
console.log(`PowerShell tip: ${tip}`);
