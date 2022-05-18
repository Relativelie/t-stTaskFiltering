export const bringFilterFlags = (e) => {
    e.preventDefault();
    const from = e.target.form[0].value.length === 0 ? null : e.target.form[0].value;
    const to = e.target.form[1].value.length === 0 ? null : e.target.form[1].value;
    return [from, to];
};
