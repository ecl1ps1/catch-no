
    //   const randomSide = (max) => {
    //     let nums = Math.floor(Math.random() * max);
    //    console.log(nums);
    //   }
      const random = (min, max) => {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }
    
    const btn = document.querySelector('.no');
    btn.addEventListener('mouseenter', () => {
        btn.style.left = `${random(0, 90)}%`;
        btn.style.top = `${random(0, 90)}%`;
    });

      