# Instructions

1. Run:

    ```
    parcel serve index.html
    ```

2. Open `tailwind.config.js` and change `turnip` to another value:

    
    ```diff
      colors: {
    -   turnip: '#9f2074',
    +   turnip: '#000',
      }
    ```

3. Expect Parcel to recompile CSS and text color in `index.html` to be updated immediately.
