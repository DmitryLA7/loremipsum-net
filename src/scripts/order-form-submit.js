const serializeForm = (formNode) => {
  const { elements } = formNode;

  return Array.from(elements)
    .filter(({ name }) => name)
    .map(({ name, value }) => {
      return { name, value };
    });
};

const orderFormSubmit = () => {
  const form = document.querySelector("#order-form");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = serializeForm(form);

    alert(JSON.stringify(formData));
  });
};

export default orderFormSubmit;
