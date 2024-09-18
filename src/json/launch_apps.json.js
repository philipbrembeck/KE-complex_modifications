// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Launch apps',
        rules: [
          {
            description: 'Launch apps by right shift+letters.',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'a', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: "open '/Applications/Utilities/Activity Monitor.app'" }],
              },
              {
                type: 'basic',
                from: { key_code: 'd', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: "open '/Applications/Dictionary.app'" }],
              },
              {
                type: 'basic',
                from: { key_code: 'e', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: "open '/Applications/TextEdit.app'" }],
              },
              {
                type: 'basic',
                from: { key_code: 'f', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: 'open ~' }],
              },
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: "open '/Applications/Safari.app'" }],
              },
              {
                type: 'basic',
                from: { key_code: 't', modifiers: { mandatory: ['right_shift'], optional: ['caps_lock'] } },
                to: [{ shell_command: "open '/Applications/Utilities/Terminal.app'" }],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
