import turtle
turtle.bgcolor("#10101c")
turtle.pensize(3)
foo = turtle.Turtle()

foo.left(90)
foo.speed(100)

def tree(i):
    if i < 10:
        return
    else:
        foo.forward(i)
        foo.left(30)
        foo.color("magenta")
        tree(3*i/4)
        foo.right(60)
        foo.color("purple")
        tree(3*i/4)
        foo.left(30)
        foo.backward(i)

tree(100)
turtle.done()
