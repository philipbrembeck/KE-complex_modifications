// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: "Use right_command+h/j/k/l/;/' to switch current tab/window/application",
        rules: [
          {
            description: "Use right_command+;/' to cycle through running applications (like command+tab).",
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'quote',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [{ key_code: 'tab', modifiers: ['left_command'] }],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'semicolon',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [
                  {
                    key_code: 'tab',
                    modifiers: ['left_command', 'left_shift'],
                  },
                ],
              },
            ],
          },
          {
            description: 'Use right_command+h/l to switch tabs in an application.',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'l',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [{ key_code: 'tab', modifiers: ['left_control'] }],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'h',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [
                  {
                    key_code: 'tab',
                    modifiers: ['left_control', 'left_shift'],
                  },
                ],
              },
            ],
          },
          {
            description: 'Use right_command+j/k to switch windows of the foreground application .',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'k',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_command'],
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'j',
                  modifiers: { mandatory: ['right_command'] },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_command', 'left_shift'],
                  },
                ],
              },
            ],
          },
          {
            description: 'Disable left_command+(tab/shift+tab) (to retrain reflexes using the other manipulators).',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'tab',
                  modifiers: { mandatory: ['left_command'] },
                },
                to: [{ key_code: 'out' }],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'tab',
                  modifiers: { mandatory: ['left_command', 'left_shift'] },
                },
                to: [{ key_code: 'out' }],
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
