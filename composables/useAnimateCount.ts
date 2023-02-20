export const useAnimateCount = (htmlRef: Ref, startAmount: number, endAmount: number, duration: number) => {
  let interval: ReturnType<typeof setInterval>;
  const range = endAmount - startAmount;
  const stepTime = Math.abs(Math.floor(duration / range));
  const endTime = new Date().getTime() + duration;

  const animateCount = () => {
    const remaining = Math.max((endTime - new Date().getTime()) / duration, 0);
    const value = Math.round(endAmount - remaining * range);
    htmlRef.value.innerHTML = value;
    if (value === endAmount) clearInterval(interval);
  };
  return (interval = setInterval(animateCount, stepTime));
};
