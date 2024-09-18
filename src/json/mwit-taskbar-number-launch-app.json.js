// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Launch MacOS apps, like on windows + number',
        rules: [
          {
            description: 'Launch apps by (left) option + number.',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'q',
                  modifiers: {
                    mandatory: ['left_gui'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Safari.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'w',
                  modifiers: {
                    mandatory: ['left_gui'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Visual Studio Code.app'",
                  },
                ],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: ['^com\\.apple\\.Terminal$', '^com\\.brave\\.Browser$', '^com\\.microsoft\\.VSCode$'],
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'w',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Firefox.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'q',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Safari.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '1',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Brave Browser.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '2',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Visual Studio Code.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '3',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Terminal.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '4',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Discord.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '5',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Safari.app'",
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: '6',
                  modifiers: {
                    mandatory: ['left_alt'],
                  },
                },
                to: [
                  {
                    shell_command: "open -a 'Discord.app'",
                  },
                ],
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
