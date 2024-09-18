// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'EmsSpree’s personal rules',
        rules: [
          {
            description: 'Launchpad: Post F13 if LSHIFT﹢MB32 is pressed (set CAPSLOCK to MB32 first)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  pointing_button: 'button32',
                  modifiers: { mandatory: ['left_shift'] },
                },
                to: [{ key_code: 'f13' }],
              },
            ],
          },
          {
            description: 'Show Desktop: Post MB30 if LCTRL+LSHIFT﹢MB32 is pressed (set CAPSLOCK to MB32 first)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  pointing_button: 'button32',
                  modifiers: {
                    mandatory: ['left_shift', 'left_control'],
                  },
                },
                to: [{ pointing_button: 'button30' }],
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
