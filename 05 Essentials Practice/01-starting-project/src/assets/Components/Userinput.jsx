export default function Userinput({ onchangeHandeler }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
            onBlur={(e) =>
              onchangeHandeler("initialInvestment", e.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input
            type="number"
            onBlur={(e) => onchangeHandeler("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input
            type="number"
            onBlur={(e) => onchangeHandeler("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input
            type="number"
            onBlur={(e) => onchangeHandeler("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
