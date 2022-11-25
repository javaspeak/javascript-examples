====================================================================================================
README.txt
====================================================================================================

This example shows how worker threads can be used to share CPU tasks

There are 2 examples in here:

    (i)  Parent thread with one worker thread - single_thread.js

    (ii) Parent thread with 4 worker threads - multi_thread.js



====================================================================================================
Steps carried out to create this project
====================================================================================================

(i) cd javascript-examples/nodejs_only

(ii) mkdir share_job_among_worker_threads

(iii) cd share_job_among_worker_threads

(iv) npm init -y

(v) npm install express


====================================================================================================
Steps to run the code
====================================================================================================

(i)   node main_for_single_thread.js

(ii)  time curl --get http://localhost:3000/blocking  

(iii) Output:

    result is 20000000000 curl --get http://localhost:3000/blocking  0.00s user 0.00s system 0% cpu 20.384 total

(iii) node main_for_multi_thread.js

(iv)  time curl --get http://localhost:3000/blocking

(v) Output:

    result is 20000000000 curl --get http://localhost:3000/blocking  0.00s user 0.00s system 0% cpu 5.244 total

So above you can see that we did the job 4 times faster with 4 threads
