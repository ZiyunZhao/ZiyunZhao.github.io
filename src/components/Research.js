import React, { Component } from 'react';



export class Research extends Component {
    render() {
        return (
            <div className="Research">
                <p className="name">Research</p>
                <div>
                    <p className="faas_title">
                        Autoscaling function-as-a-service computation
                    </p>

                    <p className="description">
                    The goal of this project is to use learning-based techniques to tailor the autoscaling policy
                    of individual workloads and study the performance wins of doing so. I was advised by prof. Joseph Gonzalez.
                    </p>

                </div> 


                <br></br>

                <div>
                    <p className="ASED_title">
                        Antisocial engineering detection
                    </p>

                    <p className="description">
                    The goal of this project is to build a robust system to do social engineering attack detection.
                    Aside from identifying those sophisticated attacks passively, we seek automated techniques to actively engage
                    the attackers in dialogues for identifying more information and build an attacker profile. I was advised by prof. Dawn Song.
                    </p>

                </div> 






                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p className="projects">Projects</p>

                <div>
                    <span className="rec_title">
                    Recommendation System
                        <span className="rec_stack">
                            Java, MongoDB, Web development
                        </span>
                    </span>

                    <div className="rec_description">
                        <ul class="rec_info" >
                            <dl>Implemented an interactive web page that can let users search events and purchase tickets.
                            </dl>
                            <dl>
                            Researched multiple recommendation algorithms and used content-based recommendation finally to give personalized recommendation based on search history and favorite records.
                            </dl>
                            <dl>
                            Create Java Servlets with Restful APIs to handle HTTP requests and responses.
                            </dl>
                            <dl>
                            Deployed to Amazon EC2 in order to handle large number of queries per second. 
                            </dl>
                        </ul>
                    </div>

                </div> 

                <br></br>
                <br></br>
                <br></br>

                <div>
                <span className="rl_title">
                        Deep reinforcement learning
                        <span className="rl_stack">
                        Python, Tensorflow
                        </span>
                    </span>
              
                    <br></br>
                    <div className="rl_description">
                        <ul class="rl_info" >
                            <dl>Implement policy gradient and its variants, including
                                variance reduction tricks such as implementing reward-to-go and neural network baselines.
                            </dl>
                            <dl>
                            Implement and evaluate Q-learning with convolutional neural networks for playing Atari games.
                            </dl>
                            <dl>
                            Experiment with imitation learning, including direct behavior cloning and the DAgger algorithm.
                            </dl>
                        
                        </ul>
                    </div>

                </div> 


                <br></br>
                <br></br>
                <br></br>

                <div>
                <span className="cv_title">
                    Generalizable Real-World Classifier
                        <span className="cv_stack">
                        Python, Pytorch
                        </span>
                    </span>
              
                    <br></br>
                    <div className="cv_description">
                        <ul class="cv_info" >
                            <dl>Research what kinds of data perturbations could occur in real world models. Design and build a classifier which is robust to those perturbations.
                            </dl>
                            <dl>
                            Do data augmentation to the model/training data in order to achieve the goal of the highest performance on the hidden dataset.
                            </dl>
                        </ul>
                    </div>

                </div> 



                <br></br>
                <br></br>
                <br></br>

                <div>
                <span className="os_title">
                    Pintos Operating System
                        <span className="os_stack">
                        C, OS
                        </span>
                    </span>
              
                    <br></br>
                    <div className="os_description">
                        <ul class="os_info" >
                            <dl>Added support for thread scheduling including waiting w/ efficient alarm clock, pirority scheduling, MLFQS scheduling.
                            </dl>
                            <dl>
                            Implemented argument passing for user program, system calls for process control (halt, exec, wait) and file operations (create, remove, open, filesize, read, write, seek, tell, close).
                            </dl>
                            <dl>
                            Added support for extensible file w/ indexed inode structure; implemented buffer cache and syscalls for filesystem (chdir, mkdir, readdir, isdir, inumber).
                            </dl>                            
                        </ul>
                    </div>

                </div> 






                <br></br>
                <br></br>
                <br></br>

                <div>
                <span className="kc_title">
                        Kindom Conquer
                        <span className="kc_stack">
                        Java, algorithm
                        </span>
                    </span>
              
                    <br></br>
                    <div className="kc_description">
                        <ul class="kc_info" >
                            <dl>Develop a solver for an NP-Hard problem, which uses a combination of different algorithms like greedy
                                algorithm, approximation algorithm and Linear Integer Programming and is among top 5% in the
                                project competition.
                            </dl>
                            <dl>
                            Develop a visualizer that can turn a matrix into a graph for visualization and modify online solvers for linear
                            Integer programming and Traveling Salesman problem in order to meet the demands for this project.
                            </dl>
                            <dl>
                            Divide a complex NP-Hard problem into several classical problems like dominating set and weighted
                            dominating set that could be solved in polynomial time and use the solutions of these classical problems to
                            approximate the optimal solution.   
                            </dl>                            
                        </ul>
                    </div>

                </div> 

            </div>
        )

    }
}