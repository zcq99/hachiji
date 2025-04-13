const catImage = document.getElementById('catImage');
let isShaking = false;
let clickCount = 0;  // 添加点击计数器

// 鼠标悬停效果
catImage.addEventListener('mouseenter', () => {
    catImage.src = 'cat-smile.png';
});

// 修改鼠标移出效果
catImage.addEventListener('mouseleave', () => {
    if (!isShaking) {
        catImage.src = 'cat-flower.png';
    } else {
        isShaking = false;
        catImage.classList.remove('shake');
        catImage.src = 'cat-flower.png';
    }
});

// 修改点击效果
catImage.addEventListener('click', () => {
    if (!isShaking) {
        clickCount++;
        isShaking = true;
        catImage.src = 'cat-yawn.png';
        catImage.classList.add('shake');
        
        if (clickCount >= 3) {
            const dialog = document.createElement('div');
            dialog.textContent = '你这家伙';
            dialog.style.position = 'absolute';
            dialog.style.top = '40%';
            dialog.style.left = '50%';
            dialog.style.transform = 'translate(-50%, -50%)';
            dialog.style.padding = '10px 20px';
            dialog.style.background = 'white';
            dialog.style.borderRadius = '20px';
            dialog.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            document.querySelector('.container').appendChild(dialog);
            
            // 3秒后移除对话框
            setTimeout(() => {
                dialog.remove();
                clickCount = 0;
            }, 3000);
        }
        
        // 移除这里的自动恢复定时器
    }
});
