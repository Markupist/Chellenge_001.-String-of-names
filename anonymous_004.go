package main

import (
	"fmt"
)

type Person struct {
	Name string
}

func PrintPersons(ps []Person) {
	switch len(ps) {
	case 0:
		return
	case 1:
		fmt.Println(ps[0].Name)
		return
	case 2:
		fmt.Printf("%s & %s\n", ps[0].Name, ps[1].Name)
		return
	}

	res := ps[0].Name

	last := ps[len(ps)-1].Name

	for i := 1; i < len(ps)-1; i++ {
		res += fmt.Sprintf(", %s", ps[i].Name)
	}

	res += fmt.Sprintf(" & %s", last)

	fmt.Println(res)

	return
}

func main() {
	ps0 := []Person{}
	PrintPersons(ps0)

	ps1 := []Person{
		{Name: "Bart"},
		{Name: "Lisa"},
		{Name: "Maggie"},
	}

	PrintPersons(ps1)

	ps2 := []Person{
		{Name: "Bart"},
		{Name: "Lisa"},
	}

	PrintPersons(ps2)

	ps3 := []Person{
		{Name: "Bart"},
	}

	PrintPersons(ps3)

	ps4 := []Person{
		{Name: "Bart"},
		{Name: "Lisa"},
		{Name: "Maggie"},
		{Name: "Masha"},
	}

	PrintPersons(ps4)
	return
}
