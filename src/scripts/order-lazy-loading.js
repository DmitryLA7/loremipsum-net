const orderLazyLoading = () => {
  const element = document.querySelector("#order");
  const options = { threshold: [0.25, 0.5] };

  const showAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("init-anim");
        console.log("123");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(showAnimation, options);

  observer.observe(element);
};

export default orderLazyLoading;
