import { useMemo, useState } from "react";
import { useMantineTheme, createVarsResolver } from "@mantine/core";
import "./App.scss";

function App() {
  const id = useMemo(() => `e-${Math.round(Math.random()) * 1e11}`, []);
  const [check, setCheck] = useState(false);

  const theme = useMantineTheme();

  const varsResolver = createVarsResolver((theme) => {
    const keys = [
      "--m3-switch-padding",
      "--m3-switch-size",
      "--m3-switch-bg",
      "--m3-switch-thumb-active",
      "--m3-switch-thumb-bg",
      "--m3-switch-outline",
    ];

    return {
      root: keys.reduce((data, next) => {
        data[next] = theme.other.switch[next] as string;
        return data;
      }, {} as { [id: string]: string }),
    };
  });

  const style = varsResolver(theme, {}, {});

  return (
    <label className="mk-switch" style={{ ...style["root"] }} htmlFor={id}>
      <input
        id={id}
        checked={check}
        onChange={({ target: { checked } }) => setCheck(checked)}
        type="checkbox"
        className="mk-siwtch-control"
      />
      <div className="mk-switch-container">
        <span className="mk-switch-item" />
      </div>
    </label>
  );
}

export default App;
