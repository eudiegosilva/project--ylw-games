import { renderWithTheme } from 'utils/tests/helpers';

import { FormWrapper, FormLink } from '.';

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          example <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-AxjAm {
        margin: 0.8rem 0;
      }

      .c0 .sc-AxheI {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #000000;
        text-align: center;
      }

      .c1 a {
        color: #FFCB00;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #FFCB00;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #FFBA00;
        border-bottom: 0.1rem solid #FFBA00;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              example 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
