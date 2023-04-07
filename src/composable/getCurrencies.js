const getCurrencies = async () => {
  try {
    const res = await fetch("http://localhost:5000/currencies");

    if (res.ok) {
      const currencies = await res.json();
      return currencies;
    } else {
      throw new Error("cannot read data");
    }
  } catch (err) {
    alert(`ERROR: cannot read data, ${err}`);
  }
};

export { getCurrencies };
