---
id: linear_regression
title: Linear Regression
sidebar_label: Linear Regression
---

:::caution
This design is not standardized and currently unstable.
:::

We implement the least-squares linear regression algorithm.
Linear regression is a popular machine learning algorithm that models the relationship between two variables as linear.
In a simple linear regression, the linear regression line has an equation of the form Y = a + b ∗ X where X is an explanatory variable and Y is a dependent variable.

While more efficient implementations of least-squares linear regression can easily be achieved,
we show a simple implementation for ease of readability. 
For convenience, we define a Point circuit to abstract the notion of a two-dimensional point,
as shown in Figure 15. Figure 16 shows the code used to instantiate the least-squares linear regression circuit.

```leo
circuit Point {
    x: i32;
    y: i32;
    
    function new(x: i32, y: i32) -> Self { 
        return Self { x, y };
    }
}
```

```leo
circuit LinearRegression {
    points: [Point; 5];
    
    // Instantiates a linear regression circuit.
    function new(points: [Point; 5]) -> Self { 
        return Self { points };
    }
    
    // Return the slope of the linear regression.
    function slope(self) -> i32 { let num_points = 5i32;
        // Calculate the sums.
        let x_sum = 0i32; 
        let y_sum = 0i32; 
        let xy_sum = 0i32; 
        let x2_sum = 0i32; 
        for i in 0..5 {
            x_sum += self.points[i].x;
            y_sum += self.points[i].y;
            xy_sum += self.points[i].x * self.points[i].y;
            x2_sum += self.points[i].x * self.points[i].x;
        }
        let numerator = (num_points * xy_sum) - (x_sum * y_sum); 
        let denominator = (num_points * x2_sum) - (x_sum * x_sum);
        let slope = numerator / denominator;
        return slope;
    }
    // Return the offset of the linear regression.
    function offset(self, slope: i32) -> i32 {
        let num_points = 5i32; 
        // Calculate the sum. 
        let x_sum = 0i32;
        let y_sum = 0i32;
        for i in 0..5 {
            x_sum += self.points[i].x;
            y_sum += self.points[i].y; 
        }
        return (y_sum - slope * x_sum) / num_points; 
    }
}
```